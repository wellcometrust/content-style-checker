curl -i \
    -H "Content-Type: application/json" \
    -X POST -d '{"title": "my title", "body": "<h1>Darth webpage Vader is the father of Luke Skywalker aging.</h1><div>Hello there, general Kenobi.</div>"}' \
    http://localhost:5000/check
echo '\n'
