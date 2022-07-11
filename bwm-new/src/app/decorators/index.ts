export const AppDecorator = (config: { message: any; }) => {
  console.log(config.message);

  return (target: { prototype: { hello: string; }; }) => {
    console.log('Decorated class - ', target);

    target.prototype.hello = 'Hello From Decorator';
  };
};
  