FROM node

RUN npm init \
    && npm i keypress \
    && npm i chalk
