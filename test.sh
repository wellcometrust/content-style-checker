curl -i \
    -H "Content-Type: application/json" \
    -X POST -d '{"text": "Darth Vader is the father of Luke Skywalker."}' \
    http://localhost:3333/check
echo '\n'
