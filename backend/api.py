from flask import Flask, request
from flask_cors import CORS, cross_origin
import quiz

app = Flask(__name__)
cors = CORS(app)

@app.route("/", methods=["POST"])
def test_endpoint():
    data = request.json
    requested_subject = data['subject']
    return quiz.make_quiz(requested_subject)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000) 