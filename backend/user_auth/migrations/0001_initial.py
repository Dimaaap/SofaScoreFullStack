# Generated by Django 4.1.13 on 2024-06-28 14:50

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='CustomUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True, verbose_name='email_address')),
                ('first_name', models.CharField(default='', max_length=50)),
                ('second_name', models.CharField(default='', max_length=50)),
                ('username', models.CharField(default='', max_length=100)),
                ('picture', models.ImageField(blank=True, null=True, upload_to='profile_pics/')),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
