from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.schemas import RecipeCreate, RecipeResponse
from app.crud import create_recipe
from app.database import get_db

router = APIRouter()

@router.post("/", response_model=RecipeResponse)
def create_new_recipe(recipe: RecipeCreate, db: Session = Depends(get_db)):
    # Assumer qu'un utilisateur connecté est disponible ici
    owner_id = 1  # Valeur temporaire
    return create_recipe(db, recipe, owner_id)
