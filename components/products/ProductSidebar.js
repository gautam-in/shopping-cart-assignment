import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useQuery } from "react-query";
import LoadError from '../LoadError'
import styled from "styled-components";

const Sidebar = styled.div`
  background-color: #dedede;
  width: 20%;
  @media (max-width: 767px) {
    width: 100%;
    background-color: transparent;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    display: none;
  }
`;

const SidebarItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0;
  border-bottom: 1px solid #ccc;

  a {
    display: inline-flex;
    padding: 15px;
    width: 100%;

    &.active {
      background: var(--colorPrimary);
      color: #fff;
    }
  }
`;

const CategorySelect = styled.select`
  @media (min-width: 768px) {
    display: none;
  }
  width: 100%;
  margin: 2rem 0;
  border: 0;
  padding: 15px 10px;
  background-color: var(--colorPrimary);
  color: #fff;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml,%0A%3Csvg id='SvgjsSvg1001' width='288' height='288' xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs'%3E%3Cdefs id='SvgjsDefs1002'%3E%3C/defs%3E%3Cg id='SvgjsG1008' transform='matrix(1,0,0,1,0,0)'%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='288' height='288' viewBox='0 0 24 24'%3E%3Cpath d='M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z' fill='%23ffffff' class='color000 svgShape'%3E%3C/path%3E%3C/svg%3E%3C/g%3E%3C/svg%3E");
  background-size: 1em;
  background-position: calc(100% - 1.3em) center;
  background-repeat: no-repeat;
  border-radius: 3px;
`;
const baseUrl = "http://localhost:3000/api/categories";

const getCategories = async () => {
  const res = await axios.get(baseUrl);
  return res.data.sort((a, b) => a.order - b.order).filter((category) => category.enabled)
}

function ProductSidebar() {
  const router = useRouter();
  const {isLoading, isError, data} = useQuery('getCategories', getCategories);

  const CategoryOption = ({ id, name }) => {
    return <option value={id}>{name}</option>;
  };

  const handleProductPage = (e) => {
    router.push(`/products/${e.target.value}`);
  };

  if(isLoading) {
    return <p>Loading...</p>
  }

  if(isError) {
    return <LoadError />
  }

  if(data) {
    return (
      <Sidebar>
        <CategorySelect
          onChange={handleProductPage}
          value={router.query.category}
        >
          {data.map((category) => {
            return (
              <CategoryOption
                key={category.id}
                id={category.id}
                name={category.name}
              />
            );
          })}
        </CategorySelect>
        <SidebarList>
          {data.map((category) => {
            return (
              <SidebarItem key={category.id}>
                <Link href={`/products/${category.id}`} passHref>
                  <a
                    className={
                      router.query.category?.includes(category.id) ? "active" : ""
                    }
                  >
                    {category.name}
                  </a>
                </Link>
              </SidebarItem>
            );
          })}
        </SidebarList>
      </Sidebar>
    );
  }
  
}

export default ProductSidebar;
