@echo off
echo ==============================================
echo   Pushing Zerodha Project to GitHub
echo ==============================================
echo.

:: Step 1: Check if frontend/.git exists and remove it to prevent nested repository issues
if exist "frontend\.git" (
    echo [1/4] Found nested Git repository in 'frontend' folder. Removing it...
    rmdir /s /q "frontend\.git"
    if errorlevel 1 (
        echo ERROR: Failed to remove frontend\.git. Please close any files or editors using that directory and try again.
        pause
        exit /b 1
    )
    echo Successfully removed nested Git repository metadata.
) else (
    echo [1/4] No nested Git repository found in 'frontend'. Proceeding...
)

:: Step 2: Remove cached submodule/nested link in git
echo [2/4] Resetting Git tracking index for 'frontend' folder...
git rm --cached -r "frontend" 2>nul
echo Done.

:: Step 3: Add all files
echo [3/4] Staging all files in the project...
git add .
if errorlevel 1 (
    echo ERROR: Failed to stage files.
    pause
    exit /b 1
)

:: Step 4: Commit changes
echo [4/4] Committing changes...
git commit -m "Track frontend files directly and merge into main repository"
if errorlevel 1 (
    echo WARNING: Git commit failed or nothing to commit.
)

:: Step 5: Push to remote
echo.
echo Pushing to GitHub (origin main)...
git push origin main
if errorlevel 1 (
    echo ERROR: Failed to push to GitHub. Please check your internet connection and GitHub permissions.
    pause
    exit /b 1
)

echo.
echo ==============================================
echo   SUCCESS: All code pushed to GitHub!
echo ==============================================
pause
