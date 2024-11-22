from fastapi import HTTPException

def user_not_found_exception():
    raise HTTPException(status_code=404, detail="User not found")

def invalid_credentials_exception():
    raise HTTPException(status_code=401, detail="Invalid credentials")

def recipe_not_found_exception():
    raise HTTPException(status_code=404, detail="Recipe not found")
