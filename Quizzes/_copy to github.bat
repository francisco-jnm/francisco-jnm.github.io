@echo off
set "path1=C:\_DOCUMENTOS_FJNM\Programacion\Javascript\Quizzes"
set "path2=C:\github\francisco-jnm.github.io\quizzes"

echo Deleting all files in %path2%...
del /q "%path2%\*.*"

echo Copying files from %path1% to %path2%, excluding .bat files...
for %%f in ("%path1%\*") do (
    if /i not "%%~xf"==".bat" (
        copy "%%f" "%path2%"
    )
)

echo Done!
pause
