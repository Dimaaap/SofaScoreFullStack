# Generated by Django 4.1.13 on 2024-06-28 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('soccer', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='leaguesmodels',
            name='end_date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='leaguesmodels',
            name='start_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]