# Generated by Django 4.0.2 on 2022-02-07 12:16

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Invoice',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tracking_number', models.CharField(default=None, max_length=255, null=True)),
                ('i_type', models.CharField(choices=[('INVOICE', 'INVOICE'), ('QUOTATION', 'QUOTATION')], default=None, max_length=255, null=True)),
                ('due', models.DateField(default=datetime.date.today)),
                ('date', models.DateField(default=datetime.date.today)),
                ('terms', models.CharField(blank=True, default='Pay soon', max_length=128)),
                ('comments', models.TextField(blank=True, default='Make sure you pay as soon as possible')),
                ('is_voided', models.BooleanField(blank=True, default=False)),
            ],
        ),
        migrations.CreateModel(
            name='InvoiceLine',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.DecimalField(decimal_places=2, default=0.0, max_digits=16)),
                ('quantity', models.IntegerField(default=1)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.DecimalField(decimal_places=2, default=0, max_digits=16)),
                ('date', models.DateField(auto_now_add=True)),
                ('method', models.CharField(choices=[('cash', 'Cash'), ('transfer', 'Transfer'), ('debit card', 'Debit Card'), ('mobile', 'Mobile-Transfer')], default='transfer', max_length=32)),
                ('reference_number', models.CharField(default=None, max_length=255, null=True)),
                ('comments', models.TextField(default='Thank you for your business')),
            ],
        ),
    ]
