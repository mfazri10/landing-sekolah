export interface Contact {
    id?: number; // optional karena saat membuat tidak ada ID
    firstName: string;
    lastName: string;
    email: string;
    phone?: string; // optional
    subject: string;
    message: string;
    createdAt?: Date; // optional juga
}