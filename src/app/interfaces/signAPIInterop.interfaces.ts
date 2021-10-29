export module generalModule {
    export interface RESTService {
        status_response: string;
        message: string;
        fecha: string;
        hora: string;
        response_key: string;
        response_time: string;
    }
}

export module infoModule {

    export interface Document {
        granted: number;
        available: number;
        used: number;
    }

    export interface Products {
        document: Document;
    }

    export interface CurrentPlan {
        id: string;
        title: string;
        code: string;
        products: Products;
    }

    export interface BillingCycle {
        from: string;
        to: string;
        granted_documents: number;
        signed_documents: number;
        pending_documents: number;
        available_documents: number;
    }

    export interface FullBillingCycle {
        from: string;
        to: string;
    }

    export interface ToCharge {
        current_plan: CurrentPlan;
        billing_cycle: BillingCycle;
        full_billing_cycle: FullBillingCycle;
    }

    export interface Response {
        id: number;
        unique_token: string;
        tax_id: string;
        email: string;
        name: string;
        first_name: string;
        last_name: string;
        to_charge: ToCharge;
        confirmed: boolean;
        has_documents: boolean;
        has_certificates: boolean;
        last_signature_requested_at?: any;
        last_signed_at: Date;
        sign_in_count: number;
        allow_business_signing: boolean;
        allow_sign_only_hash?: any;
        show_endorsables?: any;
        show_companies: boolean;
        show_frontend_tax_id_filter: boolean;
        aliases: any[];
        emails: string[];
        mkms_id?: any;
        jwt: string;
    }

    export interface RootObject {
        REST_Service: generalModule.RESTService;
        response: Response;
    }

}

export module documentsModule {

    
    export interface Owner {
        id: number;
        email: string;
        name: string;
        is_company: boolean;
    }

    export interface Creator {
        id: number;
        email: string;
        name: string;
    }

    export interface AlreadySigned {
        id: number;
        email: string;
        name: string;
    }

    export interface Permissions {
        delete: boolean;
        close: boolean;
        archive: boolean;
        dearchive: boolean;
        download: boolean;
        transfer: boolean;
        burn: boolean;
        create_signer: boolean;
        create_reviewer: boolean;
        create_viewer: boolean;
        create_signature: boolean;
    }

    export interface Features {
        tax_id_validation: boolean;
    }

    export interface Signer {
        id: string;
        name: string;
        email: string;
        tax_id: string;
        role: string;
        field?: any;
        signed: boolean;
        widget_id?: any;
        current: boolean;
        last_reminded_at?: any;
        features: Features;
        sat_auth: boolean;
    }

    export interface Subject {
        CN: string;
        name: string;
        O: string;
        C: string;
        emailAddress: string;
        x500UniqueIdentifier: string;
        serialNumber: string;
    }

    export interface Issuer {
        CN: string;
        O: string;
        OU: string;
        emailAddress: string;
        street: string;
        postalCode: string;
        C: string;
        ST: string;
        L: string;
        x500UniqueIdentifier: string;
        unstructuredName: string;
    }

    export interface Certificate {
        subject: Subject;
        issuer: Issuer;
    }

    export interface User {
        id: number;
        email: string;
        name: string;
    }

    export interface Signature {
        id: string;
        name: string;
        email: string;
        signed: boolean;
        signed_at: Date;
        certificate_number: string;
        certificate: Certificate;
        tax_id: string;
        signature: string;
        user: User;
    }

    export interface Response {
        id: string;
        send_mail: boolean;
        original_hash: string;
        signed_hash?: any;
        name?: any;
        signed_by_all: boolean;
        signed: boolean;
        signed_at: Date;
        created_at: Date;
        burned_at?: any;
        status: any[];
        external_id: string;
        remind_every?: any;
        expires_at?: any;
        days_to_expire?: any;
        created_by: number;
        state: string;
        manual_close: boolean;
        encrypted: boolean;
        allow_business: boolean;
        file_file_name: string;
        archived: boolean;
        krs: boolean;
        owner: Owner;
        creator: Creator;
        callback_url?: any;
        sign_callback_url?: any;
        already_signed: AlreadySigned[];
        has_not_signed: any[];
        permissions: Permissions;
        file: string;
        file_download: string;
        file_signed: string;
        file_signed_download: string;
        file_zipped: string;
        file_xml: string;
        signers: Signer[];
        viewers: any[];
        signatures: Signature[];
    }

    export interface RootObject {
        REST_Service: generalModule.RESTService;
        response: Response[];
    }

}

export module documentModule {

    
    export interface Owner {
        id: number;
        email: string;
        name: string;
        is_company: boolean;
    }

    export interface Creator {
        id: number;
        email: string;
        name: string;
    }

    export interface AlreadySigned {
        id: number;
        email: string;
        name: string;
    }

    export interface Permissions {
        delete: boolean;
        close: boolean;
        archive: boolean;
        dearchive: boolean;
        download: boolean;
        transfer: boolean;
        burn: boolean;
        create_signer: boolean;
        create_reviewer: boolean;
        create_viewer: boolean;
        create_signature: boolean;
    }

    export interface Features {
        tax_id_validation: boolean;
    }

    export interface Signer {
        id: string;
        name: string;
        email: string;
        tax_id: string;
        role: string;
        field?: any;
        signed: boolean;
        widget_id?: any;
        current: boolean;
        last_reminded_at?: any;
        features: Features;
        sat_auth: boolean;
    }

    export interface Subject {
        CN: string;
        name: string;
        O: string;
        C: string;
        emailAddress: string;
        x500UniqueIdentifier: string;
        serialNumber: string;
    }

    export interface Issuer {
        CN: string;
        O: string;
        OU: string;
        emailAddress: string;
        street: string;
        postalCode: string;
        C: string;
        ST: string;
        L: string;
        x500UniqueIdentifier: string;
        unstructuredName: string;
    }

    export interface Certificate {
        subject: Subject;
        issuer: Issuer;
    }

    export interface User {
        id: number;
        email: string;
        name: string;
    }

    export interface Signature {
        id: string;
        name: string;
        email: string;
        signed: boolean;
        signed_at: Date;
        certificate_number: string;
        certificate: Certificate;
        tax_id: string;
        signature: string;
        user: User;
    }

    export interface Response {
        id: string;
        send_mail: boolean;
        original_hash: string;
        signed_hash?: any;
        name?: any;
        signed_by_all: boolean;
        signed: boolean;
        signed_at: Date;
        created_at: Date;
        burned_at?: any;
        status: any[];
        external_id: string;
        remind_every?: any;
        expires_at?: any;
        days_to_expire?: any;
        created_by: number;
        state: string;
        manual_close: boolean;
        encrypted: boolean;
        allow_business: boolean;
        file_file_name: string;
        archived: boolean;
        krs: boolean;
        owner: Owner;
        creator: Creator;
        callback_url?: any;
        sign_callback_url?: any;
        already_signed: AlreadySigned[];
        has_not_signed: any[];
        permissions: Permissions;
        file: string;
        file_download: string;
        file_signed: string;
        file_signed_download: string;
        file_zipped: string;
        file_xml: string;
        signers: Signer[];
        viewers: any[];
        signatures: Signature[];
    }

    export interface RootObject {
        REST_Service: generalModule.RESTService;
        response: Response;
    }

}

export module prepareDocumentModule {
    
    export interface Response {
        uuid: string;
        id_Documento: string;
        documento: string;
        extension: string;
        tamanio_Archivo: string;
    }

    export interface RootObject {
        REST_Service: generalModule.RESTService;
        response: Response;
    }

}

export module initSignModule {
    
    export interface Features {
        tax_id_validation: boolean;
    }

    export interface Firmante {
        id: string;
        name: string;
        email: string;
        tax_id: string;
        role: string;
        field?: any;
        signed: boolean;
        widget_id: string;
        current: boolean;
        last_reminded_at?: any;
        features: Features;
        sat_auth: boolean;
    }

    export interface Response {
        miFielIdDocumento: string;
        firmantes: Firmante[];
        sandBoxJs: string;
    }

    export interface RootObject {
        REST_Service: generalModule.RESTService;
        response: Response;
    }

}

export module signersModelModule {

    export interface RootObject {
        correo_Electronico: string;
        nombre_Completo: string;
        rfc: string;
    }

}