package vehiclemgmt.domain;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import vehiclemgmt.domain.*;

//<<< PoEAA / Repository
@RepositoryRestResource(collectionResourceRel = "vehicles", path = "vehicles")
public interface VehicleRepository
    extends PagingAndSortingRepository<Vehicle, Long> {}
