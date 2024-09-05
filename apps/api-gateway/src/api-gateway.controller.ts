import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { ClientProxy } from '@nestjs/microservices';
import axios from 'axios';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { response } from 'express';

@Controller()
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService, private http:HttpService) {}

  @Post()
  async getHello() {
    return this.http.get('http://localhost:3001/hola').toPromise();;
     
  }
}
