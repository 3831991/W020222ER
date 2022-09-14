@echo off
set /p FolderName=Choose a folder name?
set /p BG=Choose a Background Color?
IF NOT DEFINED BG SET "BG=blue"

set "Curpath=%cd%"
for %%a in ("%cd%\") do set "Curpath=%%~fa"

md "%Curpath%\%FolderName%"

copy /b NUL "%Curpath%\%FolderName%\index.html"
copy /b NUL "%Curpath%\%FolderName%\style.css"
copy /b NUL "%Curpath%\%FolderName%\script.js"

(echo ^<!DOCTYPE html^>&& echo ^<html^>&& echo 	^<head^>&& echo 		^<meta charset="UTF-8"^>&& echo 		^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>&& echo 		^<meta http-equiv="X-UA-Compatible" content="ie=edge"^>&& echo 		^<title^>%FolderName%^</title^>&& echo 		^<link rel="stylesheet" href="style.css"^>&& echo 		^<script src="https://code.jquery.com/jquery-3.6.0.min.js"^>^</script^>&& echo 		^<script src="script.js"^>^</script^>&& echo 	^</head^>&& echo 	^<body^>&& echo         ^<h1^>%FolderName%^</h1^>&& echo.&& echo         ^<div^>&& echo             ^<section^>&& echo                 ^<p^>^</p^>&& echo.                 && echo             ^</section^>&& echo         ^</div^>&& echo 	^</body^>&& echo ^</html^>)> "%Curpath%\%FolderName%\index.html"

(echo ^@import url^('https://fonts.googleapis.com/css2^?family=Secular^+One^&display=swap'^);&& echo body {&& echo     direction: rtl;&& echo     background-color: %BG%;&& echo     font-family: 'Secular One', sans-serif;&& echo }&& echo.  && echo h1 {&& echo     text-align: center;&& echo     color: white;&& echo     font-size: 50px;&& echo }&& echo.  && echo div {&& echo     min-height: 500px;&& echo     background-color: #ffffffe3;&& echo     max-width: 900px;&& echo     width: 90^%%;&& echo     margin: auto;&& echo     border-radius: 5px;&& echo }&& echo.  && echo section {&& echo     border-bottom: 1px solid #c9c9c9;&& echo     padding: 16px;&& echo }&& echo.  && echo p {&& echo     margin: 0;&& echo     margin-bottom: 8px;&& echo }&& echo.  && echo select {&& echo     font-size: 20px;&& echo     padding: 6px;&& echo     border-radius: 6px;&& echo     margin: 10px;&& echo })> "%Curpath%\%FolderName%\style.css"