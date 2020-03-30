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
        let relationships_doc = ''
        let rel_type = ''

        Object.keys(env.associativeTables).sort().forEach((table) => {
            relationships_doc = relationships_doc == '' ? relationships_doc : `${relationships_doc}\n\n`
            let association = env.associativeTables[table]
            relationships_doc = `${relationships_doc}${table}\n${'='.repeat(table.length)}\n`
            if (association["direct"]) {
                rel_type = "many-to-one"
            } else if (association["junction_target"]){
                rel_type = "many-to-many"
            } else {
                rel_type = "one-to-many"
            }
            relationships_doc = `${relationships_doc}This describes a ${rel_type} relationship.\n\n\n`

            Object.keys(association).forEach((entry) => {
                if (entry == "supported_tables"){
                    relationships_doc = `${relationships_doc}\nThe ID from this table is referenced in these tables:`
                    association[entry].forEach((data) => {
                        relationships_doc = `${relationships_doc}\n    - ${data}`
                    })
                }
            })
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

function get_structure_doc(name) {
    structure_doc = ''

    return structure_doc
}

test = new RelationshipsDoc()