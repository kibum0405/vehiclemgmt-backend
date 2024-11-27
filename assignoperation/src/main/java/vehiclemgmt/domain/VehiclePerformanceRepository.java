package vehiclemgmt.domain;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import vehiclemgmt.domain.*;

//<<< PoEAA / Repository
@RepositoryRestResource(
    collectionResourceRel = "vehiclePerformances",
    path = "vehiclePerformances"
)
public interface VehiclePerformanceRepository
    extends PagingAndSortingRepository<VehiclePerformance, String> {}
