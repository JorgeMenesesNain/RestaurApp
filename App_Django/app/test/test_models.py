import datetime
from django.test import TestCase


from user.models import User
from tables.models import Table
from categories.models import Category
from products.models import Product
from insumos.models import Insumos
from orders.models import Order
from payments.models import Payment

#user
class testmodelUser(TestCase):
    @classmethod

    def setUpTestData(cls):
        User.objects.create(
            username='Admin',
            first_name='Jorge',
            last_name='meneses',
            email='admin@example.com',
            is_staff=True,
            is_active=False,
            is_superuser=True,
            rol='ADMIN'
        )
    #Username
    def test_username_max_length(self):
        user= User.objects.get(email='admin@example.com')
        max_length= User._meta.get_field('username').max_length
        self.assertEqual(max_length,150)

    def test_username_label(self):
        user=User.objects.get(email='admin@example.com')
        field_label = User._meta.get_field('username').verbose_name
        self.assertEqual(field_label,'username')

    #first name

    def test_first_name_max_length(self):
        user= User.objects.get(email='admin@example.com')
        max_length= User._meta.get_field('first_name').max_length
        self.assertEqual(max_length,150)

    def test_first_name_label(self):
        user=User.objects.get(email='admin@example.com')
        field_label = User._meta.get_field('first_name').verbose_name
        self.assertEqual(field_label,'first name')

    #last_name
    def test_last_name_max_length(self):
        user= User.objects.get(email='admin@example.com')
        max_length= User._meta.get_field('last_name').max_length
        self.assertEqual(max_length,150)

    def test_last_name_label(self):
        user=User.objects.get(email='admin@example.com')
        field_label = User._meta.get_field('last_name').verbose_name
        self.assertEqual(field_label,'last name')

    #last_name
    def test_email_max_length(self):
        user= User.objects.get(email='admin@example.com')
        max_length= User._meta.get_field('email').max_length
        self.assertEqual(max_length,254)

    def test_email_label(self):
        user=User.objects.get(email='admin@example.com')
        field_label = User._meta.get_field('email').verbose_name
        self.assertEqual(field_label,'email')

    #is_active
    def test_is_active_default(self):
        user=User.objects.get(email='admin@example.com')
        default= User._meta.get_field('is_active').default
        self.assertTrue(default)

    def test_is_active_label(self):
        user=User.objects.get(email='admin@example.com')
        field_label = User._meta.get_field('is_active').verbose_name
        self.assertEqual(field_label,'active')

    #is_staff
    def test_is_staff_default(self):
        user=User.objects.get(email='admin@example.com')
        default= User._meta.get_field('is_staff').default
        self.assertFalse(default)

    def test_is_staff_label(self):
        user=User.objects.get(email='admin@example.com')
        field_label = User._meta.get_field('is_staff').verbose_name
        self.assertEqual(field_label,'staff status')
    
    #is_superuser
    def test_is_superuser_default(self):
        user=User.objects.get(email='admin@example.com')
        default= User._meta.get_field('is_superuser').default
        self.assertFalse(default)

    def test_is_superuser_label(self):
        user=User.objects.get(email='admin@example.com')
        field_label = User._meta.get_field('is_superuser').verbose_name
        self.assertEqual(field_label,'superuser status')

    #Rol
    def test_rol_max_length(self):
        user= User.objects.get(email='admin@example.com')
        max_length= User._meta.get_field('rol').max_length
        self.assertEqual(max_length,255)

    def test_rol_label(self):
        user=User.objects.get(email='admin@example.com')
        field_label = User._meta.get_field('rol').verbose_name
        self.assertEqual(field_label,'rol')

    
class testmodelTable (TestCase):
    @classmethod

    def setUpTestData(cls):
        Table.objects.create(number=1)

    def test_numero_label(self):
        table= Table.objects.get(number=1)
        field_label = Table._meta.get_field('number').verbose_name
        self.assertEqual(field_label,'number')

class testmodelCategory (TestCase):
    @classmethod
    def setUpTestData(cls):
        Category.objects.create(title='Helados')

    def test_title_max_length(self):
        category= Category.objects.get(id=1)
        max_length= Category._meta.get_field('title').max_length
        self.assertEqual(max_length,100)

    def test_title_label(self):
        category= Category.objects.get(id=1)
        field_label = Category._meta.get_field('title').verbose_name
        self.assertEqual(field_label,'title')

    def test_image_label(self):
        category= Category.objects.get(id=1)
        field_label = Category._meta.get_field('image').verbose_name
        self.assertEqual(field_label,'image')


class testmodelProduct(TestCase):
    @classmethod
    def setUpTestData(cls):
        Product.objects.create(
            title='Chocolate',
            price=2000,
            active=True,
            )
        
    def test_title_max_length(self):
        producto= Product.objects.get(id=1)
        max_length= Product._meta.get_field('title').max_length
        self.assertEqual(max_length,255)

    def test_title_label(self):
        producto= Product.objects.get(id=1)
        field_label = Product._meta.get_field('title').verbose_name
        self.assertEqual(field_label,'title')

    def test_price_label(self):
        producto= Product.objects.get(id=1)
        field_label = Product._meta.get_field('price').verbose_name
        self.assertEqual(field_label,'price')

    def test_active_label(self):
        producto= Product.objects.get(id=1)
        field_label = Product._meta.get_field('active').verbose_name
        self.assertEqual(field_label,'active')

    def test_active_default(self):
        producto= Product.objects.get(id=1)
        default= Product._meta.get_field('active').default
        self.assertFalse(default)

class testmodelInsumo(TestCase):
    @classmethod
    def setUpTestData(cls):
        Insumos.objects.create(
            nombre= 'Harina',
            cantidad= 200,
            medida= 'KILOGRAMOS'
            )

    def test_nombre_max_length(self):
        insumos= Insumos.objects.get(id=1)
        max_length= Insumos._meta.get_field('nombre').max_length
        self.assertEqual(max_length,255)

    def test_nombre_label(self):
        insumos= Insumos.objects.get(id=1)
        field_label = Insumos._meta.get_field('nombre').verbose_name
        self.assertEqual(field_label,'nombre')

    def test_cantidad_label(self):
        insumos= Insumos.objects.get(id=1)
        field_label = Insumos._meta.get_field('cantidad').verbose_name
        self.assertEqual(field_label,'cantidad')


    def test_medida_max_length(self):
        insumos= Insumos.objects.get(id=1)
        max_length= Insumos._meta.get_field('medida').max_length
        self.assertEqual(max_length,255)

    def test_medida_label(self):
        insumos= Insumos.objects.get(id=1)
        field_label = Insumos._meta.get_field('medida').verbose_name
        self.assertEqual(field_label,'medida')
        
class testmodelOrder(TestCase):
    @classmethod
    def setUpTestData(cls):
        Order.objects.create(
            status='PENDING',
            preparacion='PREPARANDO',
            created_at= datetime,
            close=False
            )
        
    def test_status_max_length(self):
        order= Order.objects.get(id=1)
        max_length= Order._meta.get_field('status').max_length
        self.assertEqual(max_length,255)

    def test_status_label(self):
        order= Order.objects.get(id=1)
        field_label = Order._meta.get_field('status').verbose_name
        self.assertEqual(field_label,'status')

    def test_preparacion_max_length(self):
        order= Order.objects.get(id=1)
        max_length= Order._meta.get_field('preparacion').max_length
        self.assertEqual(max_length,255)

    def test_preparacion_label(self):
        order= Order.objects.get(id=1)
        field_label = Order._meta.get_field('preparacion').verbose_name
        self.assertEqual(field_label,'preparacion')

    def test_created_at_label(self):
        order= Order.objects.get(id=1)
        field_label = Order._meta.get_field('created_at').verbose_name
        self.assertEqual(field_label,'created at')

    def test_close_label(self):
        order= Order.objects.get(id=1)
        field_label = Order._meta.get_field('close').verbose_name
        self.assertEqual(field_label,'close')

    def test_close_default(self):
        order= Order.objects.get(id=1)
        default= Order._meta.get_field('close').default
        self.assertFalse(default)

class testmodelPayment(TestCase):
    @classmethod
    def setUpTestData(cls):
        Payment.objects.create(
            totalPayment=10000,
            paymentType='CARD',
            statusPayment='PAID',
            created_at=datetime
            )    

    def test_totalPayment_label(self):
        payment= Payment.objects.get(id=1)
        field_label = Payment._meta.get_field('totalPayment').verbose_name
        self.assertEqual(field_label,'totalPayment')

    def test_paymentType_max_length(self):
        payment= Payment.objects.get(id=1)
        max_length= Payment._meta.get_field('paymentType').max_length
        self.assertEqual(max_length,255)

    def test_paymentType_label(self):
        payment= Payment.objects.get(id=1)
        field_label = Payment._meta.get_field('paymentType').verbose_name
        self.assertEqual(field_label,'paymentType')

    def test_statusPayment_max_length(self):
        payment= Payment.objects.get(id=1)
        max_length= Payment._meta.get_field('statusPayment').max_length
        self.assertEqual(max_length,255)

    def test_statusPayment_label(self):
        payment= Payment.objects.get(id=1)
        field_label = Payment._meta.get_field('statusPayment').verbose_name
        self.assertEqual(field_label,'statusPayment')

    def test_created_at_label(self):
        payment= Payment.objects.get(id=1)
        field_label = Payment._meta.get_field('created_at').verbose_name
        self.assertEqual(field_label,'created at')