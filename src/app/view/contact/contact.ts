import { Component, inject, signal } from '@angular/core';
import { form, FormField, maxLength, required } from '@angular/forms/signals';
import { NgClass } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface ContactData {
    name: string;
    email: string;
    message: string;
}

@Component({
    selector: 'app-contact',
    imports: [
        FormField,
        NgClass,
        TranslatePipe
    ],
    templateUrl: './contact.html',
    styleUrl: './contact.scss',
})
export class ContactView {
    private http = inject(HttpClient);
    private translate = inject(TranslateService);

    protected contactModel = signal<ContactData>({
        name: '',
        email: '',
        message: ''
    });

    protected contactForm = form(this.contactModel, (schemaModel) => {
        required(schemaModel.name, {message: this.translate.instant('contact.error.name.required')})
        maxLength(schemaModel.name, 50, {message: this.translate.instant('contact.error.name.maxLength')})
        required(schemaModel.email, {message: this.translate.instant('contact.error.email.required')})
        maxLength(schemaModel.email, 100, {message: this.translate.instant('contact.error.email.maxLength')})
        required(schemaModel.message, {message: this.translate.instant('contact.error.message.required')})
        maxLength(schemaModel.message, 500, {message: this.translate.instant('contact.error.message.maxLength')})
    });

    protected submitting = signal(false);
    protected message = signal<string | null>(null);

    protected submitForm(event?: Event): void {
        if (event) {
            event.preventDefault();
        }
        if (this.submitting()) return;

        this.message.set(null);
        this.submitting.set(true);

        const data = this.contactModel();
        const url = 'https://formzero2.simon1-buchinger.workers.dev/api/forms/contact-form/submissions';
        const body = new URLSearchParams();
        body.set('name', data.name);
        body.set('email', data.email);
        body.set('message', data.message);

        const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

        this.http.post(url, body.toString(), {headers, responseType: 'text'}).subscribe({
            next: () => {
                this.message.set(this.translate.instant('contact.success'));
                this.contactForm().reset({name: '', email: '', message: ''});
            },
            error: (err) => {
                console.error('Form submission error', err);
                this.message.set(this.translate.instant('contact.failed'));
            },
            complete: () => {
                this.submitting.set(false);
            }
        });
    }
}
