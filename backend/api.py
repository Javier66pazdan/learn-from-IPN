from flask import Flask, request
import quiz

app = Flask(__name__)

@app.route("/", methods=["POST"])
def test_endpoint():
    data = request.json
    requested_subject = data['subject']
    return quiz.read_files(requested_subject)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000) 