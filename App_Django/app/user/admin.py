from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from user.models import User
# Register your models here.


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    add_form_template = "admin/auth/user/add_form.html"
    change_user_password_template = None
    fieldsets = (
        (None, {"fields": ("username", "password",)}),
        (("Personal info"), {"fields": ("first_name", "last_name", "email")}),
        (
            ("Permissions"),
            {
                "fields": (
                    "rol",
                    "is_active",
                    "is_staff",
                    "is_superuser",
                ),
            },
        ),
    )
    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("username", "password1", "password2"),
            },
        ),
    )
    list_display = ("username", "email", "first_name", "last_name", "is_staff", "is_superuser","rol")
    list_filter = ("is_staff", "is_superuser", "is_active", "rol")
    search_fields = ("username", "first_name", "last_name", "email")
    ordering = ("username",)
