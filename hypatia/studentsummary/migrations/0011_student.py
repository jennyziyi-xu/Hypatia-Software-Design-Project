# Generated by Django 3.1.3 on 2020-11-26 02:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('studentsummary', '0010_merge_20201124_2241'),
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
    ]