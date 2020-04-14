FROM bocks/datasource:0.3.1

RUN apt update
RUN apt install -y python3 \
    python-dev \
    python3-pip
RUN pip3 install sphinx

COPY code /code

WORKDIR /code

CMD make datasource
