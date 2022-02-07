# Generated by Django 4.0.2 on 2022-02-07 19:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0002_serviceimage'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='is_listed',
        ),
        migrations.AddField(
            model_name='service',
            name='listed',
            field=models.CharField(choices=[('YES', 'YES'), ('NO', 'NO')], default='YES', max_length=200),
        ),
    ]
