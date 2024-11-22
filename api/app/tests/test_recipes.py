def test_create_recipe(client):
    response = client.post("/recipes", json={"name": "Pasta", "description": "Delicious Italian pasta"})
    assert response.status_code == 201
