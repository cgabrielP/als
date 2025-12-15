## Instalación y configuración backend

Clonar el repositorio y entrar al proyecto:

```bash
git clone https://github.com/cgabrielP/als
cd als

# Instala las dependencias y crea el entorno virtual
pipenv install

# Activa el entorno virtual del proyecto
pipenv shell
# Entra al directorio 'config' 
cd config
# Corre las migraciones
python manage.py makemigrations
python manage.py migrate
#ejecuta el servidor
python manage.py runserver
```
## Instalación y configuración frontend
```bash
cd frontend
npm install
ng serve


```

