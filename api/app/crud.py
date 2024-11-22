from sqlalchemy.orm import Session
from app.models import User, Recipe
from app.schemas import UserCreate, RecipeCreate

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def create_user(db: Session, user: UserCreate):
    db_user = User(username=user.username, hashed_password=user.password)  # Simplification
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def create_recipe(db: Session, recipe: RecipeCreate, owner_id: int):
    db_recipe = Recipe(**recipe.dict(), owner_id=owner_id)
    db.add(db_recipe)
    db.commit()
    db.refresh(db_recipe)
    return db_recipe
