export type BloodGroup = 'A-' | 'A+' | 'B-' | 'B+' | 'O-' | 'O+' | 'AB-' | 'AB+'

export interface Donor {
    bloodGroup: BloodGroup | ''
    address: string
    email: string
    additionalInfo: string
}
