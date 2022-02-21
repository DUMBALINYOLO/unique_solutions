# unique_solutions
AN ONLINE ECOMMERCE SYSTEM FOR UNIQUE SOLUTIONS WRITTEN PYTHON DJANGO AND REACT JS

1. git clone https://github.com/DUMBALINYOLO/unique_solutions
2. cd unique_solutions
3. python -m venv venvname
4. venvname\scripts\activate on windows
5. python -m pip install --upgrade pip

6. pip install -r requirements.txt

7. python manage.py migrate

8. python manage.py shell_plus --notebook

9. Copy the below script and add admi user using the Jupyter notebook

AdminUser.objects.create_admin(
                    email = 'your email',
                    username = 'your username',
                    gender = 'your gender',
                    first_name = 'your firstname',
                    middle_name = 'your middle name',
                    last_name ='your lastname',
                    password='your password'
                )

make sure gender is in capital letters as its stored in a choicefield as such.


10. stop juyter server

11. python manage.py runserver


go to your browser


12. Login as the Administrator and create products and services

13. logout and create a customer account

14. Start playing with the SYSTEM


For frontend modifications you can always go to the yen folder and make some react js tweaks.

The project was developed to test the new material ui interface and react router dom as means pf simulating
how to migrate our platforms from the old systems

The theme is not yet handled

We use material ui concurently with primereact as there are some primereact features like form components
and datatables that are way to easy to work with



There are three types of dashboards, public, customer and management. 
