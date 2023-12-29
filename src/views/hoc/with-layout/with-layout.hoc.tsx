import { FC } from 'react';
import { Layout } from '@views/layout/layout';


 export const withLayout = (LoadedComponent:FC<any>) => {
  return (props:any)=>{
    return(
      <Layout>
        <LoadedComponent props={props} />
      </Layout>
     
    )
  }
};


