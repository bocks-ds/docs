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
