# Utiliser une image de base officielle Python
FROM python:3.10-slim

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /app

# Copier les fichiers du projet dans le répertoire de travail du conteneur
COPY . /app

# Installer les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Exposer le port utilisé par l'application
EXPOSE 8000

# Commande pour démarrer ton application (par exemple, un serveur Flask ou FastAPI)
CMD ["python", "app.py"]  # Remplace par la commande appropriée pour ton projet
