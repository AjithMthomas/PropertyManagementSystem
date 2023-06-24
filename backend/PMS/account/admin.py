from django.contrib import admin
from .models import User
from django.contrib.auth.admin import UserAdmin
from django.utils.html import format_html

class UserAdmin(UserAdmin):
    list_display = ('username', 'email','phone_number' ,'is_active','image')
    readonly_fields = ('last_login', 'date_joined')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()



admin.site.register(User, UserAdmin) 
