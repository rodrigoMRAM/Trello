# Generated by Django 5.0.1 on 2024-01-28 17:41

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Tables',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=50, verbose_name='nombre')),
                ('identificacion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trelloApi.board')),
            ],
        ),
        migrations.CreateModel(
            name='Cards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=200)),
                ('posicion', models.IntegerField(default=1)),
                ('color', models.CharField(blank=True, max_length=50, null=True)),
                ('id_tablas', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='trelloApi.tables', verbose_name='')),
            ],
        ),
    ]
