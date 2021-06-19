import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { mockUser } from '../../mock/constants/user.mock';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('addNewUser', () => {
    it('should add user to localStorage when no session exists for users', (done: DoneFn) => {
      spyOn(localStorage, 'getItem').and.returnValue('');
      const login = service.addNewUser(mockUser);
      login.subscribe((val) => {
        expect(val).toEqual(mockUser);
        done();
      });
    });

    it('should add user to localStorage when users array already exists for users', (done: DoneFn) => {
      spyOn(localStorage, 'getItem').and.returnValue(
        JSON.stringify([mockUser])
      );
      const login = service.addNewUser(mockUser);
      login
        .pipe(
          catchError((err: any) => {
            expect(err.error.error.message).toEqual('EMAIL_NOT_FOUND');
            done();
            return of(null);
          })
        )
        .subscribe();
    });

    it('should add user to localStorage when users user not exists in users session', (done: DoneFn) => {
      spyOn(localStorage, 'getItem').and.returnValue(
        JSON.stringify([mockUser])
      );
      const newMockUser = { ...mockUser, email: 'test2@test.com' };
      const login = service.addNewUser(newMockUser);
      login.subscribe((val) => {
        expect(val).toEqual(newMockUser);
        done();
      });
    });
  });

  describe('loginUser', () => {
    it('should throw error EMAIL_NOT_FOUND from localStorage when no session exists for users', () => {
      spyOn(localStorage, 'getItem').and.returnValue('');
      service.loginUser(mockUser);
      expect(service).toBeTruthy();
    });

    it('should throw error INVALID_PASSWPRD when user exists in localStorage but wrong password', (done: DoneFn) => {
      spyOn(localStorage, 'getItem').and.returnValue(
        JSON.stringify([mockUser])
      );
      const newMockUser = { ...mockUser, password: 'wrongpassword' };
      const login = service.loginUser(newMockUser);
      login
        .pipe(
          catchError((err: any) => {
            expect(err.error.error.message).toEqual('INVALID_PASSWORD');
            done();
            return of(null);
          })
        )
        .subscribe();
    });

    it('should return user when user exists in localStorage and matched password', (done: DoneFn) => {
      spyOn(localStorage, 'getItem').and.returnValue(
        JSON.stringify([mockUser])
      );
      const login = service.loginUser(mockUser);
      login.subscribe((user) => {
        expect(user).toEqual({
          email: mockUser.email,
          firstName: mockUser.firstName,
        });
        done();
      });
    });

    it('should throw error when localStorage for users exists but user not exist in users session', (done: DoneFn) => {
      spyOn(localStorage, 'getItem').and.returnValue(
        JSON.stringify([mockUser])
      );
      const newMockUser = { ...mockUser, email: 'test2@test.com' };
      const login = service.loginUser(newMockUser);
      login
        .pipe(
          catchError((err: any) => {
            expect(err.error.error.message).toEqual('EMAIL_NOT_FOUND');
            done();
            return of(null);
          })
        )
        .subscribe();
    });
  });
});
