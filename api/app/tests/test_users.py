def test_create_user(client):
    response = client.post("/users", json={"username": "testuser", "password": "password123"})
    assert response.status_code == 201
