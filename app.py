from flask import Flask, render_template, jsonify, send_from_directory
import os
import json

app = Flask(__name__)

# Path for quizzes JSON files
QUIZ_FOLDER = os.path.join('static', 'quizzes')

# Subjects list
subjects = ["History", "Math", "Science", "Hindi", "Culture", "Geography", "Political", "India-GK", "India-Geo"]

# Homepage route
@app.route('/')
def index():
    return render_template('index.html', subjects=subjects)

# Subject route
@app.route('/subject/<subject_name>')
def subject(subject_name):
    if subject_name not in subjects:
        return "Subject not found", 404

    # List all tests for this subject
    tests = []
    subject_folder = os.path.join(QUIZ_FOLDER, subject_name)
    if os.path.exists(subject_folder):
        tests = sorted([f.replace('.json', '') for f in os.listdir(subject_folder) if f.endswith('.json')])
    return render_template('subject.html', subject=subject_name, tests=tests)

# Quiz route
@app.route('/quiz/<subject>/<test_name>')
def quiz(subject, test_name):
    quiz_file = os.path.join(QUIZ_FOLDER, subject, f"{test_name}.json")
    if not os.path.exists(quiz_file):
        return "Quiz not found", 404

    with open(quiz_file, 'r', encoding='utf-8') as f:
        data = json.load(f)

    return render_template('test.html', subject=subject, test_name=test_name, quiz=data)

# Serve static files (CSS, JS)
@app.route('/static/<path:filename>')
def custom_static(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run(debug=True)
