fs = require('fs');

try {
    const DefinitionsBuilder = require('definitions/builder')
    const env = require('env_vars');
} catch(error) {
    throw new Error('DataSource codebase not found. This application is designed to nest within an existing X-DataSource repo.') 
}

const SOURCEDIR = '/code/docs/source'
const RELFILE = `${SOURCEDIR}/Relationships.rst`

class RelationshipsDoc {

    constructor() {
        this.doc = this.get_relationships_doc()
        this.write().then(_ => {
            this.check_written()
        }).catch(err => {env.logger.debug(err)})
    }

    get_relationships_doc() {
        if (env.associativeTables.length < 1) { return ''}

        let relationships_doc = '=============\nRelationships\n=============\n'

        Object.keys(env.associativeTables).sort().forEach((table) => {
            let association = new Association(table)
            relationships_doc = `${relationships_doc}${association.output()}\n`
        })

        return relationships_doc
    }

    async write() {
        fs.writeFile(RELFILE, this.doc, function (err) {
            if (err) return console.log(err);
            console.log('Relationships written to file.');
          });
    }

    check_written() {
        fs.readFile(RELFILE, (err, data) => {
            this.data = data
            if (err) throw err;
        });
        if (this.data != this.doc) throw Error(`
            File readable, but data does not match:
            ------\n
            ${this.data}\n
            ----------\n
            ${this.doc}
        `)
    }
}

class Association {

    constructor(table_name){
        this.name = table_name
        this.data = env.associativeTables[table_name]
        this._set_references()
    }

    output() {
        let output = `${this._title()}\nThis is a **${this._rel_type()}** relationship.\n\n`
        if (this.references_this)
            output = `${output}This table is referenced by: \n\t- ${this._references_this()}\n`
        if (this.joins_to)
            output = `${output}This table joins to the table **${this.joins_to}**\n`
        return `${output}\n-----\n`
    }

    _title() {
        return `${this.name}\n${'*'.repeat(this.name.length)}\n`
    }

    _rel_type() {
        if (this.data["direct"])
            return "many-to-one"
        else if (this.data["junction_target"])
            return "many-to-many"
        return "one-to-many"
    }

    _set_references() {
        this.references_this = this.data["supported_tables"]
        // DataSource may do well to refactor junction_target to use keypairs, ie. {from: to}
        if (this.data["junction_target"])
            this.joins_to = this.data["junction_target"]
    }

    _references_this() {
        return this.references_this.join('\n\t- ')
    }
}   


test = new RelationshipsDoc()