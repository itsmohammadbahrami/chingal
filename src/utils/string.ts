export const header = {
   searchPlaceholder: 'جستجو',
};

export const users = {
   tableHeaders: [
      {
         title: 'نام کاربر',
         dataIndex: 'name',
      },
      {
         title: 'سن',
         dataIndex: 'age',
      },
      {
         title: 'شماره تلفن',
         dataIndex: 'phone',
      },
      {
         title: 'ایمیل',
         dataIndex: 'email',
      },
      {
         title: 'آدرس',
         dataIndex: 'address',
      },
      {
         title: 'شرکت',
         dataIndex: 'company',
      },
   ],
};

export const user = {
   cardTitle: 'ویرایش کاربر',
   formItems: {
      name: 'نام کاربر',
      age: 'سن',
      email: 'ایمیل',
      phoneNumber: 'شماره تلفن',
      country: 'کشور',
      city: 'شهر',
      street: 'خیابان',
      zipcode: 'کد پستی',
      company: 'شرکت',
      edit: 'ویرایش',
      delete: 'حذف',
      deleteTitle: 'آیا از حذف کاربر مطمئن هستید؟',
      yes: 'بله',
      cancel: 'بازگشت',
      message: label => `لطفا ${label} را وارد کنید`,
   },
};
