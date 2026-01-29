import {HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = import.meta.env.NG_APP_TMDB_TOKEN;

  if (authToken) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` },
    });
    return next(authReq);
  }
  
  return next(req);
};
