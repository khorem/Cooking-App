from fastapi import FastAPI
from app.routers import users, recipes, auth
from app.database import engine, Base

# Création des tables
Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(users.router, prefix="/users", tags=["Users"])
app.include_router(recipes.router, prefix="/recipes", tags=["Recipes"])
app.include_router(auth.router, prefix="/auth", tags=["Authentication"])
