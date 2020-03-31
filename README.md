# Documentation Updater

1. Add a `Dockerfile.docs` to extend this image and move appropriate files. Example:
    ```
        FROM bocks/docs
        COPY app /code/app
        COPY docs /code/docs
        WORKDIR /code
        CMD make datasource
    ```
1. Run this to update docs according to JSON content.
    `$ docker run -it --mount type=bind,source=<DEV-DIR>/docs,target=/code/docs`
1. Commit changes to git repo after updating.


## Limitations

Currently the documentation does not handle two-way relationships tactfully. 
For example, if a 'many-to-many' relationship between `table_x` and `table_y` is handled by `table_xy`, and if `associative_tables.js` lists a single association from `table_x` to `table_y`, then an docs entry will be made for `table_xy` showing that relationship. 

However, if `associative_tables.js` also lists a second association for `table_y` to `table_x`, then a second docs entry will be added to `table_xy` showing that second relationship.

This is considered a bug, and will be fixed in a future release. A potential fix will be to use a list of strings as the value for `junction_target`.