export const getErrorAndStatusFromErr = (error: any) => {
  if (error?.response?.data) {
    if (error?.response?.data?.errors) {
      const {
        response: {
          data: { code, errors },
        },
      } = error;
      return { message: errors[0].message, status: code };
    }
    const {
      response: {
        data: { message, status, code },
      },
    } = error;
    return { message, status, code };
  } else {
    return { message: 'Unknown Error, Please Contact Developers!', status: '' };
  }
};
