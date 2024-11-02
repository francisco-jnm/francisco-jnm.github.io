@echo off
REM Navigate to the directory where the quiz files are located
cd /d C:\_DOCUMENTOS_FJNM\Programacion\Javascript\Quizzes

REM Start the Python local server
start "" python -m http.server 8000

REM Open the default browser to access the HTML file
start "" http://localhost:8000/index.html
