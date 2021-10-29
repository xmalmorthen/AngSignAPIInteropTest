import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { get } from 'scriptjs';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { environment } from '../../environments/environment';
import { infoModule, documentsModule, documentModule, signersModelModule, prepareDocumentModule, initSignModule } from '../interfaces/signAPIInterop.interfaces';
import { downloadFileType } from '../types/downloadFile.type';


@Injectable({
  providedIn: 'root'
})
export class SignAPIInteropService {

  private sandboxReady$ = new BehaviorSubject<boolean>(false);

  constructor() { 
    this.loadSandbox();

  }

  // Función para cargar el js remoto del sandbox
  loadSandbox(){
      get(environment.sandbox.signAPIInterop.endPoint, () => {
        this.sandboxReady$.next(true);
      });
  }

  // Getter para el observable del indicador de sandbox cargado
  get sandboxReady(){
    return this.sandboxReady$;
  }

  // Función para obtener la información de la cuenta de firmado
  public async getAccountInfo(): Promise<infoModule.RootObject>{

    const url = `${ environment.apis.signAPIInterop.endPoint }/${ environment.apis.signAPIInterop.apiPrefix }/${ environment.apis.signAPIInterop.apiVersion }/info`;

    try {
    
      const axiosResponse: AxiosResponse<infoModule.RootObject> = await axios.get(url, {
        auth:{
          username: environment.apis.signAPIInterop.auth.user,
          password: environment.apis.signAPIInterop.auth.pwd
        },
        headers: { 
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        } 
      });

      return axiosResponse.data;

    } catch (error: any) {
      throw error;
    }

  }

  // Función para obtener la lista de documentos
  public async getDocuments(): Promise<documentsModule.RootObject>{

    const url = `${ environment.apis.signAPIInterop.endPoint }/${ environment.apis.signAPIInterop.apiPrefix }/${ environment.apis.signAPIInterop.apiVersion }/documentos`;

    try {
    
      const axiosResponse: AxiosResponse<documentsModule.RootObject> = await axios.get(url, {
        auth:{
          username: environment.apis.signAPIInterop.auth.user,
          password: environment.apis.signAPIInterop.auth.pwd
        },
        headers: { 
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        } 
      });

      return axiosResponse.data;

    } catch (error: any) {
      throw error;
    }

  }

  // Función para obtener un documento por su id
  public async getDocument(miFielIdDocument: string): Promise<documentModule.RootObject>{

    const url = `${ environment.apis.signAPIInterop.endPoint }/${ environment.apis.signAPIInterop.apiPrefix }/${ environment.apis.signAPIInterop.apiVersion }/documento/${ miFielIdDocument }`;

    try {
    
      const axiosResponse: AxiosResponse<documentModule.RootObject> = await axios.get(url, {
        auth:{
          username: environment.apis.signAPIInterop.auth.user,
          password: environment.apis.signAPIInterop.auth.pwd
        },
        headers: { 
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        } 
      });

      return axiosResponse.data;

    } catch (error: any) {
      throw error;
    }


  }

  // Función para prepara documento para firma [ PASO 1 ]
  async prepareDocumentToSign(document: File): Promise<prepareDocumentModule.RootObject>{
    const url = `${ environment.apis.signAPIInterop.endPoint }/${ environment.apis.signAPIInterop.apiPrefix }/${ environment.apis.signAPIInterop.apiVersion }/prepararDocumento`;

    try {

      const data: FormData = new FormData();
      data.append('documento', document);
    
      const axiosResponse: AxiosResponse<prepareDocumentModule.RootObject> = await axios.post(url,
        data, {
        auth:{
          username: environment.apis.signAPIInterop.auth.user,
          password: environment.apis.signAPIInterop.auth.pwd
        },
        headers: { 
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Content-Type': 'multipart/form-data'
        } 
      });

      return axiosResponse.data;

    } catch (error: any) {
      throw error;
    }

  }

  // Función para iniciar la firma de un documento [ PASO 2 ]
  async initSignDocument(idDocument: string, externalId: string, signers: signersModelModule.RootObject[]): Promise<initSignModule.RootObject>{
    const url = `${ environment.apis.signAPIInterop.endPoint }/${ environment.apis.signAPIInterop.apiPrefix }/${ environment.apis.signAPIInterop.apiVersion }/iniciarFirmaDocumento/${ idDocument }`;

    try {

      const data: string = JSON.stringify({
        firmantes: signers,
        id_Externo: externalId
      })

    
      const axiosResponse: AxiosResponse<initSignModule.RootObject> = await axios.post(url,
        data, {
        auth:{
          username: environment.apis.signAPIInterop.auth.user,
          password: environment.apis.signAPIInterop.auth.pwd
        },
        headers: { 
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
          'Content-Type': 'application/json', 
        } 
      });

      return axiosResponse.data;

    } catch (error: any) {
      throw error;
    }

  }

  // Función para descargar documento
  async downloadDocument(miFielIdDocument: string,documentType: downloadFileType){
    
    const url = `${ environment.apis.signAPIInterop.endPoint }/${ environment.apis.signAPIInterop.apiPrefix }/${ environment.apis.signAPIInterop.apiVersion }/descargar/documento/${ miFielIdDocument }/${ documentType.toString() }`;

    try {
    
      const axiosResponse: AxiosResponse = await axios.get(url, {
        auth:{
          username: environment.apis.signAPIInterop.auth.user,
          password: environment.apis.signAPIInterop.auth.pwd
        },
        headers: { 
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
        responseType: documentType != 'xml' ? 'blob' : 'text'
      });

      return axiosResponse.data;

    } catch (error: any) {
      throw error;
    }

  }


  
}
