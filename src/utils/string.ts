export const header = {
   searchPlaceholder: 'جستجو',
};

export const users = {
   tableHeaders: [
      {
         title: 'نام کاربر',
         dataIndex: 'name',
         sorter: (a, b) => a?.name.localeCompare(b?.name),
      },
      {
         title: 'سن',
         dataIndex: 'age',
         sorter: (a, b) => a?.age - b?.age,
      },
      {
         title: 'شماره تلفن',
         dataIndex: 'phone',
         sorter: (a, b) => a?.phone.localeCompare(b?.phone),
      },
      {
         title: 'ایمیل',
         dataIndex: 'email',
         sorter: (a, b) => a?.email.localeCompare(b?.email),
      },
      {
         title: 'آدرس',
         dataIndex: 'address',
      },
      {
         title: 'شرکت',
         dataIndex: 'company',
         sorter: (a, b) => a?.company.localeCompare(b?.company),
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
      emailFormatError: 'آدرس ایمیل صحیح نمیباشد',
   },
};
