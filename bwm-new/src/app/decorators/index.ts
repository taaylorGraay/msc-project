export function AppDecorator(config: { message: any; }) {
    console.log(config.message);
  
    return function(target:any) {
      console.log('Decorated class - ', target);
    }
  }
  