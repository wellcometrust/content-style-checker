curl -i \
    -H "Content-Type: application/json" \
    -X POST -d '{"title": "my title", "body": "<h1>Hello!</h1>"}' \
    http://localhost:5000/check
echo '\n'
