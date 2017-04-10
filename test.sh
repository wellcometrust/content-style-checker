curl -i \
    -H "Content-Type: application/json" \
    -X POST -d '{"title": "my title", "body": "<h1>Darth Vader is the father of Luke Skywalker.</h1><p>asdf</p><div>Hello there, general Kenobi!</div>"}' \
    http://localhost:5000/check
echo '\n'
