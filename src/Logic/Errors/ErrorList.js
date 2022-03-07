const errorDB = {
  signup: {
    e0x1000: {
      code: 0x1000,
      description: 'Full name is not given',
      hookName: 'setFullNameError',
      message: 'لطفا نام خود را وارد کنید',
      page: '/signup',
    },

    e0x1001: {
      code: 0x1001,
      description: 'Username is not given',
      hookName: 'setUsernameError',
      message: 'لطفا یک نام کاربری برای خود برگزینید',
      page: '/signup',
    },

    e0x1002: {
      code: 0x1002,
      description: 'Password is not given',
      hookName: 'setPasswordError',
      message: 'لطفا یک گذرواژه برای خود برگزینید',
      page: '/signup',
    },

    e0x1003: {
      code: 0x1003,
      description: 'Phone number is not given',
      hookName: 'setPhoneError',
      message: 'لطفا شماره ی تلفن خود را وارد کنید',
      page: '/signup',
    },

    e0x1004: {
      code: 0x1004,
      description: 'Username is not valid',
      hookName: 'setUsernameError',
      message: 'نام کاربری نامعتبر است',
      page: '/signup',
    },

    e0x1005: {
      code: 0x1005,
      description: 'Phone number is not valid',
      hookName: 'setPhoneError',
      message: 'شماره تلفنی که وارد کرده اید صحیح نیست',
      page: '/signup',
    },

    e0x1006: {
      code: 0x1006,
      description: 'Password is weak',
      hookName: 'setPasswordError',
      message: 'گذرواژه ضعیف است',
      page: '/signup',
    },

    e0x1007: {
      code: 0x1007,
      description: 'Phone number is already registered',
      hookName: 'setPhoneError',
      message: 'کاربری با این شماره تلفن وجود دارد',
      page: '/signup',
    },

    e0x1008: {
      code: 0x1008,
      description: 'Username is already taken',
      hookName: 'setUsernameError',
      message: 'این نام کاربری قبلا انتخاب شده',
      page: '/signup',
    },
  },

  login: {
    e0x1009: {
      code: 0x1009,
      description: 'Username is not given',
      hookName: 'setUsernameError',
      message: 'لطفا نام کاربری خود را وارد کنید',
      page: '/login',
    },

    e0x100a: {
      code: 0x100a,
      description: 'Password is not given',
      hookName: 'setPasswordError',
      message: 'لطفا گذرواژه خود را وارد کنید',
      page: '/login',
    },

    e0x100b: {
      code: 0x100b,
      description: 'Username is not registered',
      hookName: 'setUsernameError',
      message: 'کاربری با این نام کاربری وجود ندارد',
      page: '/login',
    },

    e0x100c: {
      code: 0x100c,
      description: 'Username or password is wrong',
      hookName: 'setPasswordError',
      message: 'نام کاربری یا گذرواژه صحیح نیست',
      page: '/login',
    },
  },
};

export default errorDB;
