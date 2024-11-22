from fastapi import APIRouter, Depends, HTTPException
from app.auth import create_access_token
from app.database import get_db
from app.crud import get_user_by_username
from app.utils import verify_password

router = APIRouter()

@router.post("/login")
def login(username: str, password: str, db: Session = Depends(get_db)):
    user = get_user_by_username(db, username)
    if not user or not verify_password(password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": user.username})
    return {"access_token": token, "token_type": "bearer"}
