# Generated by Django 4.1.7 on 2023-04-23 11:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('executors', '0003_remove_file_order'),
    ]

    operations = [
        migrations.AddField(
            model_name='file',
            name='order',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.CASCADE, related_name='file', to='executors.order'),
            preserve_default=False,
        ),
    ]
